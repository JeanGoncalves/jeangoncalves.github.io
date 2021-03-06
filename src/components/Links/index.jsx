import React from 'react'
import './style.scss'
import '../../assets/fonts/fontello-771c82e0/css/fontello.css'

class Links extends React.Component {
  render() {
    const author = this.props.data
    const links = {
      telegram: author.telegram,
      twitter: author.twitter,
      github: author.github,
      vk: author.vk,
      rss: author.rss,
      email: author.email,
      linkedin: author.linkedin,
    }

    return (
      <div className="links">
        <ul className="links__list">
          {links.twitter ? (
            <li className="links__list-item">
              <a
                href={`https://www.twitter.com/${links.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-twitter" />
              </a>
            </li>
          ): ''}

          {links.github ? (
            <li className="links__list-item">
              <a
                href={`https://www.github.com/${links.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-github" />
              </a>
            </li>
          ) : ''}

          {links.linkedin ? (
            <li className="links__list-item">
              <a href={`https://www.linkedin.com/in/${links.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-linkedin" />
              </a>
            </li>
          ) : ''}

          {links.vk ? (
            <li className="links__list-item">
              <a
                href={`https://www.vk.com/${links.vk}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-vkontakte" />
              </a>
            </li>
          ) : ''}
          
          {links.email ? (
            <li className="links__list-item">
              <a href={`mailto:${links.email}`}>
                <i className="icon-mail" />
              </a>
            </li>
          ) : ''}

          {links.telegram ? (
            <li className="links__list-item">
              <a href={`telegram:${links.telegram}`}>
                <i className="icon-paper-plane" />
              </a>
            </li>
          ) : ''}
          
          {links.rss ? (
            <li className="links__list-item">
              <a href={links.rss}>
                <i className="icon-rss" />
              </a>
            </li>
          ) : ''}
        </ul>
      </div>
    )
  }
}

export default Links
