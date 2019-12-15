require('codemirror/lib/codemirror.css');
require('codemirror/theme/idea.css');
import React from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/markdown/markdown';
import '../../../css/CodeMirror.css'

import 'hypermd/core';
import 'hypermd/mode/hypermd';

import 'hypermd/addon/hide-token';
import 'hypermd/addon/cursor-debounce';
import 'hypermd/addon/fold';
import 'hypermd/addon/read-link';
import 'hypermd/addon/click';
import 'hypermd/addon/hover';
import 'hypermd/addon/paste';
import 'hypermd/addon/insert-file';
import 'hypermd/addon/mode-loader';
import 'hypermd/addon/table-align';

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
          mode: 'hypermd',
          theme: 'hypermd-light',
          hmdFold: {
            image: true,
            link: true,
            math: true,
          },
          hmdHideToken: true,
          hmdCursorDebounce: true,
          hmdPaste: true,
          hmdClick: true,
          hmdHover: true,
          hmdTableAlign: true,

          readOnly: false,
          lineWrapping: true,
          spellcheck: true,
          tabSize: 2,
          autofocus: true,
          fixedGutter: true
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
