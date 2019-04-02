import React from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'


export default class NoteEditorCore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '### [CodeMirror](http://codemirror.net)\n' +
  'A versatile _text_ editor implemented in **JavaScript*** for the browser. \n' +
  'It is specialized for editing `code`, and comes with a number of language modes and addons that implement more advanced editing functionality.'
    }
  }

  render() {
    return (
      <div>
      <CodeMirror
        value={this.state.value}
        options={{
          mode: 'markdown',
          theme: 'material',
          lineNumbers: true,
          readOnly: false
        }}
        onBeforeChange={(editor, data, value) => {
          this.setState({value});
        }}
        onChange={(editor, data, value) => {
        }}
      />
      </div>
    );
  }
}
