import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'

function App() {
  return (
    <div className="app">
      <aside className="register">
        <h2 className="register_title">Cadastrar</h2>
        <form className="register_form">
          <div className="register_block-field">
            <label className="register_label" htmlFor="github_username">Usuário do Github</label>
            <input className="register_field" name="github_username" id="github_username" required/>
          </div>

          <div className="register_block-field">
            <label className="register_label" htmlFor="techs">Tecnologias</label>
            <input className="register_field" name="techs" id="techs" required/>
          </div>

          <div className="register_group">
            <div className="register_block-field">
              <label className="register_label" htmlFor="latitude">Latitude</label>
              <input className="register_field" name="latitude" id="latitude" required/>
            </div>
            <div className="register_block-field">
              <label className="register_label" htmlFor="longitude">Longitude</label>
              <input className="register_field" name="longitude" id="longitude" required/>
            </div>
          </div>
          <button className="register_submit" type="submit">Salvar</button>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
