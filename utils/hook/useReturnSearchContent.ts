import { useEffect, useState } from "react";

type Props = {
  content: string;
  query: string;
  isTitle: boolean;
}

export default function useReturnSearchContent({ content, query, isTitle }: Props) {
  const firstOccurence = content.match(new RegExp(query, "i"));
  const [contentStringDisplay, setContentStringDisplay] = useState({
    isBeginString: false,
    firstStringDisplay: "",
    resultStringDisplay: "",
    isLastString: false,
    lastStringDisplay: ""
  });

  useEffect(() => {
    const numberOfCharacter = 60;

    if (firstOccurence && firstOccurence !== undefined) {
      const firstIndex = firstOccurence?.index !== undefined ? firstOccurence.index : -1;
      const lastIndex = firstIndex >= 0 ? firstIndex + query.length : -1;

      if (lastIndex >= 0 && !isTitle) {
        //logic
        const firstStringIndex = ((firstIndex - numberOfCharacter) >= 0) ? firstIndex - numberOfCharacter : 0;
        const lastStringIndex = ((lastIndex + numberOfCharacter) < content.length) ? lastIndex + numberOfCharacter : content.length

        setContentStringDisplay({
          isBeginString: firstStringIndex == 0 ? true : false,
          firstStringDisplay: content.substring(firstStringIndex, firstIndex),
          resultStringDisplay: firstOccurence[0],
          isLastString: lastStringIndex == content.length,
          lastStringDisplay: content.substring(lastIndex, lastStringIndex)
        });
      } else {
        setContentStringDisplay({
          isBeginString: true,
          firstStringDisplay: content.substring(0, firstIndex),
          resultStringDisplay: firstOccurence[0],
          isLastString: true,
          lastStringDisplay: content.substring(lastIndex, content.length)
        })
      }
    } else {
      if (isTitle) {
        setContentStringDisplay({
          isBeginString: true,
          firstStringDisplay: content,
          resultStringDisplay: "",
          isLastString: true,
          lastStringDisplay: ""
        })
      } else {
        setContentStringDisplay({
          isBeginString: true,
          firstStringDisplay: content.substring(0, numberOfCharacter*2),
          resultStringDisplay: "",
          isLastString: numberOfCharacter*2 > content.length,
          lastStringDisplay: ""
        })
      }
    }

  }, [query]);

  return contentStringDisplay;
}