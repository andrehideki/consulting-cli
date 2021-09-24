import { InputHTMLAttributes, useEffect, useState } from "react";
import InputDefault from "../InputDefault";
import { PossibleTag, PossibleTags } from "./styles";
import { get } from '../../../../utils/request';
import { Key } from "../../../../types/Key";

export interface TagsTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  required?: boolean;
}

interface tags {
  availables: string[];
  matching: string[];
  selectedTagIndex: number;
}

export default function InputTags(props: TagsTextProps) {

  const [possibleTag, setPossibleTag] = useState<string>("");
  const [tags, setTags] = useState<tags>({
    availables: [],
    matching: [],
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
        console.log(tag, possibleTag, tag.includes(possibleTag))
        return tag.includes(possibleTag)}):
      [];
    setTags({...tags, matching: matchingTags })
    
  }, [possibleTag]);

  function handleKeyUp(event: any) {
    setPossibleTag(event.target.value);
    const keyPressed = event.keyCode;
    if (keyPressed === Key.ARROW_UP || keyPressed === Key.ARROW_DOWN) {
      handleArrowUpAndDown(keyPressed);
    }
  }

  function handleArrowUpAndDown(key: Key) {
    const valueToIncrease = key === Key.ARROW_UP? -1: (key === Key.ARROW_DOWN? 1 : 0);
    const increaedIndex = tags.selectedTagIndex + valueToIncrease;
    console.log('index', increaedIndex)
    setTags({...tags, selectedTagIndex: increaedIndex >= 0 && increaedIndex < tags.availables.length -1? increaedIndex: tags.selectedTagIndex });
  }

  return (
    <InputDefault label={props.label} required={props.required}>
      <input {...props} onKeyUp={ handleKeyUp } />
      <PossibleTags>
        { tags.matching.map((tag, tagIndex) => (
          <PossibleTag key={ tag } className={ tagIndex === tags.selectedTagIndex? 'selected' : ''}>
            { tag }
          </PossibleTag>
        ))}
      </PossibleTags>
    </InputDefault>
  );
}