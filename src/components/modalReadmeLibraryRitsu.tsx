import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import ModalMarkdown from "./modalMarkdown"

export default (props: { isActive: boolean; hide: () => void }) => {
  const html = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/libraryReadmeRitsu/" }) {
        html
      }
    }
  `).markdownRemark.html

  return (
    <ModalMarkdown
      title="波音リツ 利用規約"
      html={html}
      isActive={props.isActive}
      hide={props.hide}
    />
  )
}
