import { useState } from 'react';
import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../images/bug.svg";
import ideaImageUrl from "../../images/idea.svg";
import thoughtImageUrl from "../../images/thought.svg";
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export const feedBackTypes = {
  BUG:{
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de inseto'
    },
  },
  IDEA:{
    title: 'Idéia',
    image: {
      source: ideaImageUrl,
      alt: ' Imagem de uma lâmpada'
    },
  },
  OTHER:{
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: ' Imagem de uma nuvem de pensamento'
    },
  },
};

export type FeedbackType = keyof typeof feedBackTypes;

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">      
      <header>
        <span className="text-xl leading-6"> Deixe seu feedback</span>
        <CloseButton />
      </header>      
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
      ) : (
        <p>Hello world!</p>
      )}
      <footer>
        Feito por <a className="underline underline-offset-2" href="http://github.com/lucasrosendo">Lucas Rosendo</a>
      </footer>
    </div>
  );
}