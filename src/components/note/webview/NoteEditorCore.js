require('codemirror/lib/codemirror.css');
require('codemirror/theme/idea.css');
import React from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/markdown/markdown';

export default class NoteEditorCore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '# Title \n' +
        '## subtitle \n' +
        '### [CodeMirror](http://codemirror.net)\n' +
  'A versatile _text_ editor implemented in **JavaScript*** for the browser. \n' +
  'It is specialized for editing `code`, and comes with a number of language modes and addons that implement more advanced editing functionality.'
    }
  }

  render() {
    return (
      <CodeMirror
        value={this.state.value}
        options={{
          mode: 'markdown',
          theme: 'idea',
          readOnly: false,
          lineWrapping: true
        }}
        onBeforeChange={(editor, data, value) => {
          this.setState({value});
        }}
        onChange={(editor, data, value) => {
        }}
      />
    );
  }
}
