import * as S from "./stylesLoading";

interface LoadingProps {
    overlay?: boolean;
}

export function Loading({ overlay = false }: Readonly<LoadingProps>) {
    if (overlay) {
        return (
            <S.FullOverlay>
                <S.Spinner />
            </S.FullOverlay>
        );
    }

    return (
        <S.Overlay>
            <S.Spinner />
        </S.Overlay>
    );
}