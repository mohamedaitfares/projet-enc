import React, { useState } from 'react';
import './Question_Form.css';

export default function Question_Form(props) {
  const [formContent, setFormContent] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  


  const addQuestion = () => {
    setFormContent([...formContent, {
      name: `question_${formContent.length}`,
      label: 'Untitled question',
      question_type: 'short_answer',
      list: []
    }]);
  };

  const updateField = (fieldName, updateKey, updateValue) => {
  setFormContent(formContent => formContent.map(field => {
    if (field.name === fieldName) {
      return { ...field, [updateKey]: updateValue };
    }
    return field;
  }));
};


  const addFieldOption = (fieldName, option) => {
  setFormContent(formContent => {
    const newFormContent = formContent.map(field => {
      if (field.name === fieldName) {
        if (field.question_type === 'multichoice') {
          const newList = [...field.list, { label: option, checked: false }];
          return { ...field, list: newList, textField: '' };
        } else if (field.question_type === 'checkbox') {
          const newList = [...field.list, { label: option, checked: false }];
          return { ...field, list: newList, textField: '' };
        }
      }
      return field;
    });
    return newFormContent;
  });
};

const togglePreview = () => {
    setShowPreview(!showPreview);
  }
const renderPreview = () => {
    return (
      <div>
        <h1>Preview</h1>
        <h2>{props.name}</h2>
        {formContent.map(field => (
          <div key={field.name}>
            <h3>{field.label}</h3>
            {field.question_type === 'short_answer' && <input type='text' placeholder={field.label} />}
            {field.question_type === 'paragraph' && <textarea rows={4} placeholder={field.label} />}
            {field.question_type === 'multichoice' && (
              <div>
                {field.list.map((item, index) => (
                  <div key={index}>
                    <input
                      type='radio'
                      id={item.label}
                      name={field.name}
                      value={item.label}
                    />
                    <label htmlFor={item.label}>{item.label}</label>
                  </div>
                ))}
              </div>
            )}
            {field.question_type === 'checkbox' && (
              <div>
                {field.list.map((item, index) => (
                  <div key={index}>
                    <input
                      type='checkbox'
                      id={item.label}
                      name={field.label}
                      checked={item.checked}
                    />
                    <label htmlFor={item.label}>{item.label}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }


  return (
    <>
    <h1>Form Maker</h1>
    <button onClick={togglePreview}>{showPreview ? 'Hide Preview' : 'Show Preview'}</button>
    <div className='form'>
      <div>
        
        <h2>{props.name}</h2>
      </div>
      <div className='field'>
        {formContent.map(field => (
          <div key={field.name}>
            <div>
              {
                field.editing ?
                  <input
                    type='text'
                    value={field.label}
                    onChange={e => updateField(field.name, 'label', e.target.value)}
                    onBlur={() => updateField(field.name, 'editing', false)}
                  />
                  :
                  <label onClick={() => updateField(field.name, 'editing', true)}>{field.label}</label>
              }
            </div>
            <div>
              <select value={field.question_type} onChange={e => updateField(field.name, 'question_type', e.target.value)}>
                <option value='short_answer'>Short Answer</option>
                <option value='paragraph'>Paragraph</option>
                <option value='multichoice'>Multichoice</option>
                <option value='checkbox'>Checkbox</option>
              </select>
            </div>
            <div className='my-4'>
              {field.question_type === 'short_answer' && <input type='text' placeholder={field.label} />}
              {field.question_type === 'paragraph' && <textarea rows={4} placeholder={field.label} />}
              {field.question_type === 'multichoice' &&
  <div>
    {field.list.map((item, index) => (
      <div key={index}>
        <input
          type='radio'
          id={item.label}
          name={field.name} // add name attribute to group the radio buttons together
          value={item.label}
          checked={item.checked}
          onChange={() => {
            updateField(field.name, 'list', field.list.map((el, idx) =>
              idx === index ? { ...el, checked: true } : { ...el, checked: false }
            ));
          }}
        />
        <label htmlFor={item.label}>{item.label}</label>
      </div>
    ))}
    <div>
      <input
        type='text'
        onChange={e => updateField(field.name, 'textField', e.target.value)}
        value={field.textField}
        placeholder='Add an option'
      />
      <button onClick={() => addFieldOption(field.name, field.textField)}>Add</button>
    </div>
  </div>
}

              {field.question_type === 'checkbox' &&
                <div>
                  {field.list.map((item, index) => (
                    <div key={index}>
                      <input
                        type='checkbox'
                        id={item.label}
                        name={field.label}
                        checked={item.checked}
                        onChange={() => {
                          const newList = [...formContent];
                          newList[newList.findIndex(f => f.name === field.name)].list[index].checked = !item.checked;
                          setFormContent(newList);
                        }}
                      />
                      <label htmlFor={item.label}>{item.label}</label>
                    </div>
                  ))}
                  <div>
                    <input
                      type='text'
                      onChange={e => updateField(field.name, 'textField', e.target.value)}
                      value={field.textField}
                      placeholder='Add an option'
                    />
                    <button onClick={() => addFieldOption(field.name, field.textField)}>Add</button>
                  </div>
                </div>
              }
            </div>
          </div>
        ))}
        <button onClick={addQuestion}>Add Question</button>
        <br />
        <br />
        
      </div>
    </div>
      <div className='field'>
        {showPreview && renderPreview()}
      </div>
    </>
  );
}

