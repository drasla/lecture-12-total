import { Button, Card, Input, Label, Wrapper } from "../styles/styles.tsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

type FormValues = {
    userId: number;
    keyword: string;
};

function Home() {
    const navigate = useNavigate();

    // const form = useForm<FormValues>();
    const { register, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            userId: 1,
            keyword: "react",
        },
    });

    const onSubmit = (data: FormValues) => {
        const queryString = new URLSearchParams({
            userId: data.userId.toString(),
            keyword: data.keyword,
        }).toString();
        navigate(`/result?${queryString}`);
    };

    return (
        <Wrapper>
            <Card>
                <h2>종합연습</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label>User ID</Label>
                    <Input {...register("userId", { required: true })} type={"number"} />
                    <Label>Keyword</Label>
                    <Input {...register("keyword", { required: true })} />
                    <Button>조회하기</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default Home;
