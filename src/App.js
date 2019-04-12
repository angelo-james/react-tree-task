import React, { Component } from 'react';
import FirstBranch from './components/FirstBranch';
import './App.css';

class App extends Component {
  state = {
    data : [
      {
        "id": "01",
        "name": "Local Disk (C:)",
        "expanded": true,
        "children": [
          {
            "id": "01-01",
            "name": "Program Files",
            "children": [
              {
                "id": "01-01-01",
                "name": "Windows NT"
              },
              {
                "id": "01-01-02",
                "name": "Windows Mail"
              }, 
              {
                "id": "01-01-03",
                "name": "Windows Photo Viewer"
              }
            ] 
          },
          {
            "id": "01-02",
            "name": "Users",
            "children": [
              {
                "id": "01-02-01",
                "name": "Smith"
              }, 
              {
                "id": "01-02-02",
                "name": "Public"
              },
              {
                "id": "01-02-03",
                "name": "Admin"
              }
            ]
          }, 
          {
            "id": "01-03",
            "name": "Windows",
            "children": [
              {
                "id": "01-03-01",
                "name": "Boot"
              }, 
              {
                "id": "01-03-02",
                "name": "FileManager"
              },
              {
                "id": "01-03-03",
                "name": "System32"
              }
            ]
          } 
        ] 
      },
      {
        "id": "02",
        "name": "Local Disk (D:)",
        "children": [
          {
            "id": "02-01",
            "name": "Personals",
            "children": [
              {
                "id": "02-01-01",
                "name": "My photo.png"
              }, 
              {
                "id": "02-01-02",
                "name": "Rental document.docx"
              },
              {
                "id": "02-01-03",
                "name": "Pay slip.pdf"
              } 
            ]
          }, 
          {
            "id": "02-02",
            "name": "Projects",
            "children": [
              {
                "id": "02-02-01",
                "name": "ASP Application"
              }, 
              {
                "id": "02-02-02",
                "name": "TypeScript Application"
              },
              {
                "id": "02-02-03",
                "name": "React Application"
              } 
            ]
          }, 
          {
            "id": "02-03",
            "name": "Office",
            "children": [
              {
                "id": "02-03-01",
                "name": "Work details.docx"
              }, 
              {
                "id": "02-03-02",
                "name": "Weekly report.docx"
              },
              {
                "id": "02-03-03",
                "name": "Wish list.csv"
              } 
            ]
          } 
        ]
      }, 
      {
        "id": "03",
        "name": "Local Disk (E:)",
        "children": [
          {
            "id": "03-01",
            "name": "Pictures",
            "expanded": true,
            "children": [
              {
                "id": "03-01-01",
                "name": "Wind.jpg"
              }, 
              {
                "id": "03-01-02",
                "name": "Stone.jpg"
              },
              {
                "id": "03-01-03",
                "name": "Home.jpg"
              }
            ]
          }, 
          {
            "id": "03-02",
            "name": "Documents",
            "children": [
              {
                "id": "03-02-01",
                "name": "Environment Pollution.docx"
              }, 
              {
                "id": "03-02-02",
                "name": "Global Warming.ppt"
              },
              {
                "id": "03-02-03",
                "name": "Social Network.pdf"
              }
            ] 
          },
          {
            "id": "03-03",
            "name": "Study Materials",
            "children": [
              {
                "id": "03-03-01",
                "name": "UI-Guide.pdf"
              }, 
              {
                "id": "03-03-02",
                "name": "Tutorials.zip"
              },
              {
                "id": "03-03-03",
                "name": "TypeScript.7z"
              } 
            ]
          } 
        ]
      } 
    ],
  }

  render() {
    return (
      <div>
        <h1>React Tree Component</h1>
        {this.state.data.map(node => (
          <FirstBranch 
            name={node.name}
            children={node.children}
          />
        ))}
      </div>
    );
  }
}

export default App;
