interface FormField {
    label: string;
    field: string;
    name: string;
    required?: boolean;
}

interface Template {
    name: string;
    desc: string;
    category: string;
    icon: string;
    aiprompt: string;
    slug: string;
    form: FormField[];
}

const templateList: Template[] = [
    {
        name: "Blog Title",
        desc: "An AI tool that generates blog titles based on your blog information",
        category: "blog",
        icon: "",
        aiprompt: "Give me 5 blog topic ideas",
        slug: "generate-blog-title",
        form: [
            {
                label: "Enter your blog niche",
                field: "input",
                name: "niche",
                required: true
            },
            {
                label: "Enter your blog outline",
                field: "textarea",
                name: "outline"
            }
        ]
    }
];

export default templateList;
