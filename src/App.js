import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Window,
  WindowContent,
  ProgressBar,
  TextInput
} from 'react95';
import windowTheme from 'react95/dist/themes/raspberry';

import LoaderCursor from './LoaderCursor';

import styles from './page.module.css';

import logo from './logo.png';

function App() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(previousPercent => {
        if (previousPercent === 100) {
          window.location.replace('https://simone.computer/#/webdesktops');
        }
        const diff = Math.random() * 25;
        return Math.min(previousPercent + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <>
    <div className={styles.window}>
      <ThemeProvider theme={windowTheme}>
        <Window shadow={false} style={ { width: '100%' } }>
          <WindowContent>
            <div>
              <div className={styles.headerError}>
                <div style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                  <img src={logo} alt='logo' />
                  <span style={{ fontSize: '27px', position: 'absolute', top: '37px', left: '100px'}}>Pippo OS Archiver</span>
                </div>
              </div>
              <div style={{ paddingBottom: '50px', paddingTop: '20px' }}>
                <div><h3>Unpacking <span style={{ fontStyle: 'italic' }}>desktops.zip</span> to:</h3></div>
                <TextInput
                  aria-label="directory"
                  style={{ maxWidth: '300px' }}
                  value={'//simone.computer/#/webdesktops'}
                />
              </div>
              <ProgressBar aria-label="progress" variant='tile' value={Math.floor(percent)} />
            </div>
          </WindowContent>
        </Window>
      </ThemeProvider>
    </div>
    <LoaderCursor />
  </>
}

export default App;