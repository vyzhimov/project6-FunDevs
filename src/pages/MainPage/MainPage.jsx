import Background from 'components/Background/Background';
import Container from 'components/Container/Container';
import Main from 'components/Main';

export const MainPage = () => {
  return (
    <>
      <Background />
      <Container>
        <Main />
        {/* {showModalAttention && (
        <Modal
          onClose={toggleModalAttention}
          children={() => (
            <ModalContentAttention
              title="Attention"
              message="We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."
              fnYes={() => console.log('Yes')}
              fnCancel={() => console.log('Cancel')}
            />
          )}
        />
      )} */}
      </Container>
    </>
  );
};

export default MainPage;
