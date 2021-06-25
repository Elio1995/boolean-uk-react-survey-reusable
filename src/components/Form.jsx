import { useState } from 'react';

import CheckBoxGroup from './CheckBoxGroup';

const initialFormState = {
  username: '',
  email: '',
  logo: '',
  colour: '',
  consistency: '',
  timeSpent: [],
  review: '',
  bestFeatures: [],
  worstFeatures: [],
};

const ANSWER_EXAMPLE = {
  username: 'Elio',
  email: 'elio@123.com',
  logo: '3',
  colour: '1',
  consistency: '2',
  timeSpent: ['swimming', 'chatting'],
  review: 'I love my rubber ducky! ❤️',
  bestFeatures: ['size'],
  worstFeatures: ['size'],
};

function Form(props) {
  const [answers, setAnswers] = useState({
    username: '',
    email: '',
    logo: '',
    colour: '',
    consistency: '',
    timeSpent: [],
    review: '',
    bestFeatures: [],
    worstFeatures: [],
  });

  function handleSubmit(event) {
    event.preventDefault();
    props.addAnswer(answers);
    setAnswers(initialFormState);
  }

  function handleChange(event) {
    setAnswers({ ...answers, [event.target.name]: event.target.value });
  }

  function handleCheckboxGroupChange(event) {
    const updatedArray = event.target.checked
      ? [...answers[event.target.name], event.target.value]
      : answers[event.target.name].filter(
          (feature) => feature !== event.target.value
        );

    setAnswers({ ...answers, [event.target.name]: updatedArray });
  }

  const bestFeaturesCheckbox = [
    {
      name: 'bestFeatures',
      value: 'colour',
      text: "It's yellow!",
    },
    {
      name: 'bestFeatures',
      value: 'sound',
      text: 'It squeaks!',
    },
    {
      name: 'bestFeatures',
      value: 'logo',
      text: 'It has a logo!',
    },
    {
      name: 'bestFeatures',
      value: 'size',
      text: 'Its big!',
    },
  ];

  const worstFeaturesCheckbox = [
    {
      name: 'worstFeatures',
      value: 'colour',
      text: "It's yellow!",
    },
    {
      name: 'worstFeatures',
      value: 'sound',
      text: 'It squeaks!',
    },
    {
      name: 'worstFeatures',
      value: 'logo',
      text: 'It has a logo!',
    },
    {
      name: 'worstFeatures',
      value: 'size',
      text: 'Its big!',
    },
  ];

  const timeSpentCheckbox = [
    {
      name: 'timeSpent',
      text: 'Swimming',
      value: 'swimming',
    },
    {
      name: 'timeSpent',
      text: 'Chatting',
      value: 'Chatting',
    },
    {
      name: 'timeSpent',
      text: 'Bathing',
      value: 'Bathing',
    },
    {
      name: 'timeSpent',
      text: `I don't like to spend time with it`,
      value: 'noTime',
    },
  ];

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className='form__group'>
        <h3>
          What would you say that are the best features of your rubber duck?
        </h3>
        <CheckBoxGroup
          isItChecked={answers.bestFeatures}
          CheckboxList={bestFeaturesCheckbox}
          handleCheckboxGroupChange={handleCheckboxGroupChange}
        />
      </div>
      <div className='form__group'>
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
        <CheckBoxGroup
          isItChecked={answers.worstFeatures}
          CheckboxList={worstFeaturesCheckbox}
          handleCheckboxGroupChange={handleCheckboxGroupChange}
        />
      </div>
      <div className='form__group radio'>
        <h3>How do you rate your rubber duck consistency?</h3>
        <ul>
          <li>
            <input
              id='consistency1'
              type='radio'
              name='consistency'
              value='1'
              onChange={handleChange}
              checked={answers.consistency === '1'}
            />
            <label htmlFor='consistency1'>1</label>
          </li>
          <li>
            <input
              id='consistency2'
              type='radio'
              name='consistency'
              value='2'
              onChange={handleChange}
              checked={answers.consistency === '2'}
            />
            <label htmlFor='consistency2'>2</label>
          </li>
          <li>
            <input
              id='consistency3'
              type='radio'
              name='consistency'
              value='3'
              onChange={handleChange}
              checked={answers.consistency === '3'}
            />
            <label htmlFor='consistency3'>3</label>
          </li>
          <li>
            <input
              id='consistency4'
              type='radio'
              name='consistency'
              value='4'
              onChange={handleChange}
              checked={answers.consistency === '4'}
            />
            <label htmlFor='consistency4'>4</label>
          </li>
        </ul>
      </div>
      <div className='form__group radio'>
        <h3>How do you rate your rubber duck colour?</h3>
        <ul>
          <li>
            <input
              id='colour1'
              type='radio'
              name='colour'
              value='1'
              onChange={handleChange}
            />
            <label htmlFor='colour1'>1</label>
          </li>
          <li>
            <input
              id='colour2'
              type='radio'
              name='colour'
              value='2'
              onChange={handleChange}
            />
            <label htmlFor='colour2'>2</label>
          </li>
          <li>
            <input
              id='colour3'
              type='radio'
              name='colour'
              value='3'
              onChange={handleChange}
            />
            <label htmlFor='colour3'>3</label>
          </li>
          <li>
            <input
              id='colour4'
              type='radio'
              name='colour'
              value='4'
              onChange={handleChange}
            />
            <label htmlFor='colour4'>4</label>
          </li>
        </ul>
      </div>
      <div className='form__group radio'>
        <h3>How do you rate your rubber duck logo?</h3>
        <ul>
          <li>
            <input
              id='logo1'
              type='radio'
              name='logo'
              value='1'
              onChange={handleChange}
            />
            <label htmlFor='logo1'>1</label>
          </li>
          <li>
            <input
              id='logo2'
              type='radio'
              name='logo'
              value='2'
              onChange={handleChange}
            />
            <label htmlFor='logo2'>2</label>
          </li>
          <li>
            <input
              id='logo3'
              type='radio'
              name='logo'
              value='3'
              onChange={handleChange}
            />
            <label htmlFor='logo3'>3</label>
          </li>
          <li>
            <input
              id='logo4'
              type='radio'
              name='logo'
              value='4'
              onChange={handleChange}
            />
            <label htmlFor='logo4'>4</label>
          </li>
        </ul>
      </div>
      <div className='form__group'>
        <h3>How do you like to spend time with your rubber duck</h3>
        <CheckBoxGroup
          isItChecked={answers.timeSpent}
          CheckboxList={timeSpentCheckbox}
          handleCheckboxGroupChange={handleCheckboxGroupChange}
        />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name='review'
          cols='30'
          rows='10'
          onChange={handleChange}
          value={answers.review}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type='text'
          name='username'
          onChange={handleChange}
          value={answers.username}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type='email'
          name='email'
          onChange={handleChange}
          value={answers.email}
        />
      </label>
      <input className='form__submit' type='submit' value='Submit Survey!' />
    </form>
  );
}

export default Form;