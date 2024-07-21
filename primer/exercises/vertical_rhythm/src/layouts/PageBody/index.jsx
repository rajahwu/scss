import { Hgroup } from "../../components";

export default function PageBody({ heading, title, subtitle, children}) {
    return (
        <section>
        <article>
            <Hgroup 
                heading={heading}
                title={title}
                subtitle={subtitle}
            />
        
        </article>
        </section>
    )
}