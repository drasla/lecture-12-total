// useQuery가 실행이 되면, queryFn의 함수가 실행된 결과가 data 저장소에 저장됨
// queryFn의 함수는 또다시 () => fetchFn(userId)를 실행한 결과를 반환함
// fetchFn(userId)는 그 안의 fetch().then(response => response.json())을 체이닝함
// fetch().then(response => response.json())는 결국 마지막 리턴인 response.json()을 반환함

export const fetchFn = (userId: string) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(response =>
        response.json(),
    );
};