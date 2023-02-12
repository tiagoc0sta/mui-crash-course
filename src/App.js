import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

function App() {
  const MyCustomButtom = styled(Button)({
    padding: 10,
  });

  return (
    <div className='App'>
      <Typography variant='myVariant'>This is my app</Typography>
      <Typography sx={{ color: 'myCustomColor.superDark' }}>
        Hit the like button!
      </Typography>
      <MyCustomButtom variant='contained'>Hello world</MyCustomButtom>
    </div>
  );
}

export default App;
