import HtmlParser from "react-html-parser";

export default function InlineFrame({src}){
    const res = fetch(src);
    const fetchedHtml = res;

    return(
        <div>
            {HtmlParser(fetchedHtml)}
        </div>
    )

}