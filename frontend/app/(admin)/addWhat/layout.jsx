import NavbarCategories from "@/app/components/NavbarCategories";

export default function layout({ children }) {
    return (
        <div className="flex flex-col items-center justify-between gap-12 pt-16">
            <NavbarCategories />
            {children}
        </div>
    );
}
