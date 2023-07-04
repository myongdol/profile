export function DateUpdate({yyyymmdd}) {
    return (
        <div className="date-update" style={{textAlign: "right"}}> 
            업데이트 : {YYYY_MM_DD(yyyymmdd)}
        </div>
    )
}

function YYYY_MM_DD(yyyymmdd) {
    return `${yyyymmdd.slice(0, 4)}.${yyyymmdd.slice(4, 6)}.${yyyymmdd.slice(6, 8)}`;
}