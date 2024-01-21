// Components
import HomeView from "./(main)/home/HomeView";
import MainLayout from "./(main)/layout";
import LoaderWrapper from "@/components/advanced/loader/LoaderWrapper";

export default function Home() {
  return (
    <main>
      <MainLayout>
        <LoaderWrapper>
          <HomeView />
        </LoaderWrapper>
      </MainLayout>
    </main>
  );
}
