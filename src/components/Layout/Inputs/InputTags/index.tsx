import { InputHTMLAttributes, useEffect, useState } from "react";
import InputDefault from "../InputDefault";
import { PossibleTag, PossibleTags } from "./styles";
import { get } from '../../../../utils/request';

export interface TagsTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  required?: boolean;
}

interface tags {
  availables: string[];
  matching: string[];
}

export default function InputTags(props: TagsTextProps) {

  const [possibleTag, setPossibleTag] = useState<string>("");
  const [tags, setTags] = useState<tags>({
    availables: [],
    matching: []
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
    console.log(matchingTags)
    setTags({...tags, matching: matchingTags })
    
  }, [possibleTag]);

  function handleKeyUp(event: any) {
    setPossibleTag(event.target.value);
  }

  return (
    <InputDefault label={props.label} required={props.required}>
      <input {...props} onKeyUp={ handleKeyUp }/>
      <PossibleTags>
        { tags.matching.map(tag => (
          <PossibleTag key={ tag }>
            { tag }
          </PossibleTag>
        ))}
      </PossibleTags>
    </InputDefault>
  );
}