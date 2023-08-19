import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const PAGE_TITLE = "Dashboard";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout auth={auth} header={PAGE_TITLE}>
            <Head title={PAGE_TITLE} />

            <div className="max-w-5xl mx-auto sm:px-6 lg:px-8 space-y-6 py-6"></div>
        </AuthenticatedLayout>
    );
}
