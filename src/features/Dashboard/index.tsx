// Local Dependencies
import Container from 'src/components/Container';
import Todos from 'src/features/Todos';

const Dashboard = () => {
  return (
    <Container>
      <div className="flex flex-col mt-4 items-center w-full min-h-screen">
        <Todos />
      </div>
    </Container>
  );
};

export default Dashboard;
