import  { BaseLayout, PageBody } from "../../src/layouts";
import { Hgroup } from "../../src/components";

export default function HomePage() {
 return (
 <BaseLayout>
    <>
    <Hgroup
        heading="h1"
        title="Home"
        content="App home page"
    />
    <PageBody

        heading="h1"
        title="main page content"
        content="All the pages stuff"
    >
        <div>
            <p>Sit dignissimos recusandae voluptatem ullam rem tempora sint vel repellat Vitae est nihil impedit rerum voluptatum Minima error labore at maxime labore sed. Quasi sunt ullam iusto modi perferendis debitis quasi Laudantium aliquid aspernatur rem similique mollitia suscipit Debitis excepturi exercitationem impedit praesentium minima!</p>
        </div>
    </PageBody>
    </>
</BaseLayout>
 );
}
