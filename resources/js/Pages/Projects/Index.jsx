
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const PAGE_TITLE = "Projekti";

export default function Index({ auth }) {

    return (
        <AuthenticatedLayout auth={auth} header={PAGE_TITLE}>
            <Head title={PAGE_TITLE}></Head>
                

        </AuthenticatedLayout>
    );
}
