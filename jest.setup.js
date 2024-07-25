// jest.setup.js
import '@testing-library/jest-dom';
import './test-utils.css';

jest.mock('next/image', () => ({
    __esModule: true,
    default: (props) => {
        const { src, alt, ...rest } = props;
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={src} alt={alt} {...rest} />;
    },
}));
global.URL.createObjectURL = jest.fn(() => "mockedURL");
global.URL.revokeObjectURL = jest.fn(() => "revokeObjectURL");

