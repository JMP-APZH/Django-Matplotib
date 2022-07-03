import React from 'react'
import { useNavigate } from 'react-router'

function Home() {

    const navigate = useNavigate();

    return (
        <div>
            Congratulations, You finally reached the Home Page


            <div>
                <button 
                className="button-box3 
                            bg-black hover:bg-blue-500 
                            text-white font-bold 
                            py-2 px-4 border border-gray-400 rounded"
                onClick={() => {
                    navigate("/userreg")
                }}
                >
                    User Registration

                </button>

            </div>
        </div>
    )
}

export default Home