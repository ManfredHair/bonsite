import { useRouter } from "next/router";

export async function hashString() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const password = router.query.password?.toString();

    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

// Para chamar a função e obter o hash:
hashString().then(console.log).catch(console.error);
