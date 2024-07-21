import  { BaseLayout } from "../../layouts";
import { Hgroup } from "../../components";

export default function HomePage() {
 return (
 <BaseLayout>
    <Hgroup
        heading="h1"
        title="Home"
        content="App home page"
    />
</BaseLayout>
 );
}