import React from "react";
import emojione from "emojione";
import {styled} from "@mui/material/styles";
import Markdown from "react-markdown";
import remarkRehype from "remark-rehype/lib";
import rehypeHighlight from "rehype-highlight/lib";
import remarkBreaks from "remark-breaks";
import remarkEmoji from "remark-emoji";

const Renderer = styled(Markdown)({
  margin: "0.2rem",
  fontWeight: "500",
  wordWrap: "break-word",
  h1: {margin: "0"},
  h2: {margin: "0"},
  h3: {margin: "0"},
  h4: {margin: "0"},
  h5: {margin: "0"},
  h6: {margin: "0"},
  p: {margin: "0"},
  ".emojione": {
    height: "1.2em",
    verticalAlign: "bottom",
  },
});

function convertEmoji(children: React.ReactNode | React.ReactNode[]) {
  return React.Children.map(children, (child) => {
    if (typeof child === "string") {
      return <span dangerouslySetInnerHTML={{__html: emojione.toImage(child)}} />;
    }
    return child;
  });
}

const MessageRenderer = ({content}: {content: string}) => {
  // const emojified = emojione.toImage(content).replace(/<img class="emojione".*\/>/gi, (match) => {
  //   const altAttr = match.indexOf("alt=");
  //   const srcAttr = match.indexOf("src=");
  //   if (altAttr < 0 || srcAttr < 0) return match;
  //   const alt = match.substring(altAttr + 5, match.indexOf('"', altAttr + 5));
  //   const src = match.substring(srcAttr + 5, match.indexOf('"', srcAttr + 5));
  //   return `![e!${alt}](${src})`;
  // });

  return (
    <Renderer
      skipHtml
      remarkPlugins={[
        remarkBreaks,
        [
          remarkEmoji,
          {
            emoticon: true,
          },
        ],
        /* @ts-ignore */
        [remarkRehype],
        rehypeHighlight,
      ]}
      components={{
        h1({node, children, ...props}) {
          return <h1 {...props}>{convertEmoji(children)}</h1>;
        },
        h2({node, children, ...props}) {
          return <h2 {...props}>{convertEmoji(children)}</h2>;
        },
        h3({node, children, ...props}) {
          return <h3 {...props}>{convertEmoji(children)}</h3>;
        },
        h4({node, children, ...props}) {
          return <h4 {...props}>{convertEmoji(children)}</h4>;
        },
        h5({node, children, ...props}) {
          return <h5 {...props}>{convertEmoji(children)}</h5>;
        },
        h6({node, children, ...props}) {
          return <h6 {...props}>{convertEmoji(children)}</h6>;
        },
        p({node, children, ...props}) {
          return <p {...props}>{convertEmoji(children)}</p>;
        },
      }}
    >
      {content}
    </Renderer>
  );
};

export default MessageRenderer;
