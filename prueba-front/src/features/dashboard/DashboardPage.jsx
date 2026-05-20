import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DashboardPage = () => {
    
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
        }

    }, []);

    return (
        <div className="flex flex-col min-h-screen justify-center">
            <div className="flex flex-row justify-start">
                <p className="text-5xl font-bold mb-10">DASHBOARD</p>
            </div>
            <div className="grid grid-cols-2 min-h-full gap-10 p-4">
                <div className="bg-gray-400 flex flex-col justify-center items-center py-20 rounded-2xl">
                    <p className="text-2xl font-bold">Posts:</p>
                    <p>800</p>
                </div>

                <div className="bg-gray-400 flex flex-col justify-center items-center py-20 rounded-2xl">
                    <p className="text-2xl font-bold">Albumes:</p>
                    <p>800</p>
                </div>

                <div className="bg-gray-400 flex flex-col justify-center items-center py-20 rounded-2xl">
                    <p className="text-2xl font-bold">Comentarios:</p>
                    <p>800</p>
                </div>

                <div className="bg-gray-400 flex flex-col justify-center items-center py-20 rounded-2xl">
                    <p className="text-2xl font-bold">Tareas:</p>
                    <p>800</p>
                </div>
            </div>
        
        </div>
    );
};

export default DashboardPage;
