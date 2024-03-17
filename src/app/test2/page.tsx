'use client';

import Header from "../../components/Header";

const category = () => {

    return (
        <>
            <Header></Header>
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
                    margin-block-start: 1em;
                    margin-block-end: 1em;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px;
                    padding-inline-start: 40px;
                }

                .css-1h52dri {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .css-16ixplb {
                    display: flex;
                    -webkit-box-pack: justify;
                    justify-content: space-between;
                    -webkit-box-align: center;
                    align-items: center;
                    width: 100%;
                    height: 52px;
                    overflow: hidden;
                }

                .css-1iwixyn {
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 20px;
                    color: rgb(51, 51, 51);
                }

                .css-19yliod {
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 20px;
                    margin-left: 4px;
                    color: rgb(204, 204, 204);
                }

                .css-1kscq9s {
                    transition: all 250ms cubic-bezier(0.83, 0, 0.17, 1) 0s;
                    height: auto;
                    opacity: 0;
                    overflow: hidden;
                }

                .css-x67gaa {
                    list-style: none;
                    margin-bottom: 18px;
                }

                .css-s5xdrg {
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                }

                .css-17kh8wb {
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    margin-right: 8px;
                }

                .css-1buhy1h {
                    margin-right: 4px;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 17px;
                    color: rgb(51, 51, 51);
                    display: -webkit-box;
                    overflow: hidden;
                    word-break: break-all;
                    white-space: normal;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .css-ryw54y {
                    flex-shrink: 0;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 16px;
                    color: rgb(204, 204, 204);
                }
            `}
            </style>
            <div style={{width: '1103px', paddingTop: '100px'}}>
                <ul className="css-raoddi">
                    <li className="css-1h52dri">1</li>
                    <li className="css-1h52dri">2</li>
                    <li className="css-1h52dri">3</li>
                    <li className="css-1h52dri">4</li>
                    <li className="css-1h52dri">5</li>
                    <li className="css-1h52dri">6</li>
                    <li className="css-1h52dri">7</li>
                </ul>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{border: '1px solid black', width: '220px', height: '1200px'}}>
                        <div style={{border: '1px solid black', width: '220px', height: '50px'}}>
                        </div>
                        <div style={{border: '1px solid black', width: '220px', height: '100px'}}>
                        </div>
                    </div>

                    <div style={{marginLeft: '8px', border: '1px solid black', width: '875px', height: '1200px', margin:'auto'}}>

                    </div>
                </div>



            </div>
        </>
    )
}

export default category;