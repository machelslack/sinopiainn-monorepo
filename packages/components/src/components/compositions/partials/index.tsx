import React from 'react';

const getScriptContent = (src: any) => src.replace(/<\/?script.*?>/g, '');

export interface ScriptBuilderProps {
  src: any;
  attrs: object;
  isInline: Boolean;
}

export const ScriptBuilder = ({ src, attrs = {}, isInline = false }:ScriptBuilderProps) => {
  let output;
  if (isInline) {
    output = <script {...attrs} dangerouslySetInnerHTML={{ __html: getScriptContent(src) }} />;
  } else {
    const scriptSrc = src;
    output = Array.isArray(src) ? (
      scriptSrc.map((url:any) => <script key={url} {...attrs} src={url} />)
    ) : (
        <script {...attrs} src={scriptSrc} />
      );
  }
  return <React.Fragment>{output}</React.Fragment>;
};


export const LinkBuilder = ({ src, attrs = {} }:{src:any,attrs:object}) => {
  const href = src;
  return (
    <React.Fragment>
      {Array.isArray(href) ? (
        href.map(url => <link {...attrs} href={url} />)
      ) : (
        <link {...attrs} href={href} />
      )}
    </React.Fragment>
  );
};

export const MetaTags = ({ tags }:{tags:{key:string,value:string}[]}) => tags.map(obj => <meta name={obj.key} content={obj.value} />);
