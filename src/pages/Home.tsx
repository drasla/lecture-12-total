import { Button, Card, Input, Label, Wrapper } from "../styles/styles.tsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { Dispatch, SetStateAction } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type FormValues = {
    userId: number;
    keyword: string;
};

type Props = {
    isDark: boolean;
    setIsDark: Dispatch<SetStateAction<boolean>>;
};

function Home({ isDark, setIsDark }: Props) {
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
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "20px",
                    }}>
                    <h2>종합연습</h2>
                    <button
                        style={{
                            padding: "6px 10px",
                            borderRadius: 6,
                            display: "flex",
                            alignItems: "center",
                        }}
                        onClick={() => setIsDark(!isDark)}>
                        {isDark ? (
                            <FaMoon size={20}
                            style={{
                                color: "skyblue"
                            }}/>
                        ) : (
                            <FaSun
                                size={20}
                                style={{
                                    color: "orange",
                                }}
                            />
                        )}
                    </button>
                </div>

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
