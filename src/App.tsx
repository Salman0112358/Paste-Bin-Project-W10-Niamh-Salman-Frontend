//import { greet } from "./utils/greet";
import PageHeader from "./components/PageHeader";
import PictureBox from "./components/PictureBox";
import PageFooter from "./components/PageFooter";

function App(): JSX.Element {
  return (
    <>
      <PageHeader title={"Favourite places to vist by Sal"} />
      <PictureBox
        imageLink={
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d5/1c/94/passu-valley-hunza-valley.jpg?w=1200&h=-1&s=1"
        }
        imageTitle={"Hunza Valley"}
        country={"Pakistan"}
        locale={"Hunza Valley"}
        mapLink={
          "https://www.google.com/maps?q=hunza+valley&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiwzbWSlYD5AhV8SUEAHbXbCOgQ_AUoAnoECAIQBA"
        }
        imageCaption={
          "A view of some snow covered mountains and a lake in Hunza Valley Pakistan "
        }
      />
      <PictureBox
        imageLink={
          "https://cdn5.tropicalsky.co.uk/images/800x600/coastline-around-vancouver-islands-pacific-rim-national-park-reserve.jpg"
        }
        imageTitle={"Pacific Rim National Park Reserve, British Columbia"}
        country={"Canada"}
        locale={"British Columbia"}
        mapLink={
          "https://www.google.com/maps?q=Pacific+Rim+National+Park+Reserve,+British+Columbia&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiLrv_rmYD5AhWOasAKHXukCkAQ_AUoAXoECAIQAw"
        }
        imageCaption={
          "A part of the nationl park with nice green forest and a bunch of mud and rocks in the back "
        }
      />
      <PageFooter title={"This is the page footer we are at the end!!!"} />
    </>
  );
}

export default App;
