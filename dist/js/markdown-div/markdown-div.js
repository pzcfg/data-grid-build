import React from "react";
import marked from "marked";
import { MarkdownContainer } from "./private/markdown-container";
export default class MarkdownDiv extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.targetElement = null;

    this.containerRefHook = element => {
      this.targetElement = element;
      this.renderMarkdownIntoDiv();
    };
  }

  renderMarkdownIntoDiv() {
    const {
      targetElement
    } = this;
    if (targetElement === null) return;
    const {
      contents,
      createNode
    } = this.props;
    const innerHTML = marked(contents);
    const childRange = document.createRange();
    childRange.selectNodeContents(targetElement);
    childRange.deleteContents();
    let newChild = createNode === null || createNode === void 0 ? void 0 : createNode(innerHTML);

    if (newChild === undefined) {
      const childDoc = document.createElement("template");
      childDoc.innerHTML = innerHTML;
      newChild = childDoc.content;
    }

    targetElement.appendChild(newChild);
    const tags = targetElement.getElementsByTagName("a");

    for (let i = 0; i < tags.length; i++) {
      const tag = tags[i];
      tag.target = "_blank";
      tag.rel = "noreferrer noopener";
    }
  }

  render() {
    this.renderMarkdownIntoDiv();
    return React.createElement(MarkdownContainer, {
      ref: this.containerRefHook
    });
  }

}