import { Card, Wrapper } from "../styles/styles.tsx";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchFn } from "../api/fetchUser.ts";

function Result() {
    const [params] = useSearchParams();
    const userId = params.get("userId") || "";
    const keyword = params.get("keyword") || "";

    const { data, isLoading, error } = useQuery({
        queryKey: ["user", userId],
        queryFn: () => fetchFn(userId),
    });

    return (
        <Wrapper>
            <Card>
                <h2>결과 페이지</h2>
                <p>입력한 키워드 : {keyword}</p>

                {isLoading && <p>로딩 중...</p>}
                {error && <p>에러가 발생되었습니다.</p>}

                {!isLoading && !error && data && (
                    <div>
                        <h3>API 응답 데이터</h3>
                        <p>
                            <b>Name: {data.name}</b>
                        </p>
                        <p>
                            <b>Email: {data.email}</b>
                        </p>
                        <p>
                            <b>City: {data.address.city}</b>
                        </p>
                    </div>
                )}
            </Card>
        </Wrapper>
    );
}

export default Result;
