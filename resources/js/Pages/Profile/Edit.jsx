import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";

const PAGE_TITLE = "Profile";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout auth={auth} header={PAGE_TITLE}>
            <Head title={PAGE_TITLE} />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 py-6">
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    className="max-w-xl"
                />

                <UpdatePasswordForm className="max-w-xl" />

                <DeleteUserForm className="max-w-xl" />
            </div>
        </AuthenticatedLayout>
    );
}
