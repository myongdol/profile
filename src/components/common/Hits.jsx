import { useSearchParams } from "react-router-dom";



export function Hits({url = window.location.href}) {
    const encodeUrl = encodeURIComponent(url);
    const [searchParams] = useSearchParams();

    if (searchParams.get("noHits") != null) {
        return <div style={{height: "23px"}} />
    }


    return ( 
        <a
        href="https://hits.seeyoufarm.com"
        style={{
            display: "block",
            textAlign: "right",
            height: "23px",
            }}>
            <img 
                src={`https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${encodeUrl}&count_bg=%23000000&title_bg=%23777777&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false`}
                alt="조회수"
            />


        </a>
    )
}