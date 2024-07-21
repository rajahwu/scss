import  { BaseLayout } from "../../src/layouts";
import { Hgroup } from "../../src/components";

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