import React from 'react';


export default class NoteEditorCore extends React.Component {

  render() {
    return (
      <div
        id="Quill-Editor-Container"
        style={{
          height: '100%',
          backgroundColor: '#dddddd',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            height: '100%',
            backgroundColor: '#ffebba',
            display: 'flex',
            flexDirection: 'column',
            paddingVertical: 5
          }}
        >
          <div
            id="editor"
            style={{
              backgroundColor: '#FAEBD7',
              fontSize: '20px',
              height: 'calc(100% - 42px)'
            }}
          >
            <p>Hello World!</p>
          </div>
        </div>
      </div>
    );
  }
}
