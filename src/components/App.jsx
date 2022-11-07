import { Route, Routes } from 'react-router-dom';
import { NavMenu } from './App.styled';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};
