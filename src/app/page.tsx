import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Home() {
    return (
        <main style={{ backgroundImage: 'linear-gradient(to bottom, #76ABAE, #aaaaaa)' }}>
            <NavBar></NavBar>
            <div className="flex min-h-screen flex-col items-center p-24">
                <h1 className="items-center text-6xl font-semibold">
                    Nicholas Robinson
                </h1>

                <div className="justify-center p-20">
                    <p>
                        I am a math nerd and programmer interesting in building cool projects and solving challenging
                        problems.
                    </p>
                    <p>
                        Sorry, this website is incredibly ugly — this is my first crack at actual web development!
                    </p>
                </div>
            </div>
        </main>
    );
}
