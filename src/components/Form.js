import React from 'react';

const form = props => (
  <form onSubmit={props.getRecipeName} style={{ marginBottom: "2rem" }}>
    <input type="text" name="recipeName" className="form__input" />
    <button className="form__button">Search</button>
  </form>
)

export default form;