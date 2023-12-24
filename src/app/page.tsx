// Components
import HomeView from "./(main)/home/HomeView";
import MainLayout from "./(main)/layout";

export default function Home() {
  return (
    <main>
      <MainLayout>
        <HomeView />
      </MainLayout>
    </main>
  );
}
