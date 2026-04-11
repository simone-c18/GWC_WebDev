import Link from "next/link";
// Become a member header
export default function Member() {
    return (
        <div className="fixed top-0 inset-x-0 z-50 mx-auto border-black/10 dark:border-white/10 bg-gwc-darkblue text-white flex justify-center align-items py-1">
            <Link href="/join" className="font-alexandria underline text-sm">Become a member!</Link>
        </div>
    );
}