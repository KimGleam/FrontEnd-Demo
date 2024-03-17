

const category = () => {

    return (
        <>
            <style jsx>{`
                .css-raoddi {
                    display: grid;
                    grid-template-columns: repeat(4, 180px);
                    gap: 16px 83px;
                    overflow: hidden;
                    margin-top: 28px;
                    padding: 30px 40px;
                    border: 1px solid rgb(226, 226, 226);
                    line-height: 20px;
                }

                .css-1h52dri {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            `}
            </style>
            <div>
                <ul className="css-raoddi">
                    <li className="css-1h52dri">1</li>
                    <li className="css-1h52dri">2</li>
                    <li className="css-1h52dri">3</li>
                    <li className="css-1h52dri">4</li>
                    <li className="css-1h52dri">5</li>
                    <li className="css-1h52dri">6</li>
                    <li className="css-1h52dri">7</li>
                </ul>
            </div>
        </>
    )
}

export default category;