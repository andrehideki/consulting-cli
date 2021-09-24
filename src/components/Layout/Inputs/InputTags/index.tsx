import { InputHTMLAttributes, useEffect, useState } from "react";
import InputDefault from "../InputDefault";
import { PossibleTag, PossibleTags } from "./styles";
import { get } from '../../../../utils/request';
import { Key } from "../../../../types/Key";

export interface TagsTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  required?: boolean;
  onChangeTags: Function;
}

interface tags {
  availables: string[];
  matching: string[];
  selectedTags: Set<String>;
  selectedTagIndex: number;
}

export default function InputTags(props: TagsTextProps) {

  const [possibleTag, setPossibleTag] = useState<string>("");
  const [tags, setTags] = useState<tags>({
    availables: [],
    matching: [],
    selectedTags: new Set<String>(),
    selectedTagIndex: 0
  });

  useEffect(() => {
    if (!!tags.availables) {
      get<any>('activity/tag')
        .then(tagsData => setTags({...tags, availables: tagsData }));
    }
  }, []);

  useEffect(() => {
    let matchingTags = !!possibleTag? 
      tags.availables.filter(tag => {
        return tag.includes(possibleTag)}):
      [];
    setTags({...tags, matching: matchingTags })
    
  }, [possibleTag]);

  function handleChange(event:any) {
    setPossibleTag(event.target.value);
  }

  function handleKeyUp(event: any) {
    event.preventDefault();
    const keyPressed = event.keyCode;
    if (keyPressed === Key.ARROW_UP || keyPressed === Key.ARROW_DOWN) {
      handleArrowUpAndDown(keyPressed);
    }
  }

  function handleArrowUpAndDown(key: Key) {
    const valueToIncrease = key === Key.ARROW_UP? -1: (key === Key.ARROW_DOWN? 1 : 0);
    const increaedIndex = tags.selectedTagIndex + valueToIncrease;
    setTags({...tags, selectedTagIndex: increaedIndex >= 0 && increaedIndex < tags.availables.length -1? increaedIndex: tags.selectedTagIndex });
  }

  function handlePossibleTagClick(event: any) {
    const value = event.target.innerText;
    const selectedTags = tags.selectedTags;
    selectedTags.add(value);;
    setPossibleTag("");
    setTags({...tags, selectedTags: selectedTags});
    console.log(tags)
  }

  return (
    <InputDefault label={props.label} required={props.required}>
      <input type="hidden" {...props} />
      <input value={ possibleTag } onKeyUp={ handleKeyUp } onChange={ handleChange } />
      <PossibleTags>
        { tags.matching.map((tag, tagIndex) => (
          <PossibleTag key={ tag } className={ tagIndex === tags.selectedTagIndex? 'selected' : ''}
            onClick={ handlePossibleTagClick }>
            { tag }
          </PossibleTag>
        ))}
      </PossibleTags>
    </InputDefault>
  );
}