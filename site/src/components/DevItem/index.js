import React from 'react';

import './styles.css'

function DevItem({ dev }) {
  return (
    <li className="dev">
      <header className="user">
        <img className="user_avatar" src={dev.avatar_url} alt={dev.name}/>
        <div className="user_info">
        <h3 className="user_name">{dev.name}</h3>
          <strong className="user_techs">{dev.techs.join(', ')}</strong>
        </div>
      </header>
      <p className="dev_bio">{dev.bio}</p>
      <a className="dev_github" href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
    </li>
  )
}

export default DevItem;