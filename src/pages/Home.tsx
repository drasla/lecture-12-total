import { Button, Card, Input, Label, Wrapper } from "../styles/styles.tsx";

function Home() {
    return (
        <Wrapper>
            <Card>
                <h2>종합연습</h2>

                <form>
                    <Label>User ID</Label>
                    <Input type={"number"} />
                    <Label>Keyword</Label>
                    <Input />
                    <Button>조회하기</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default Home;
