"use client";
import React, {
  useMemo,
  useRef,
  useState,
  useImperativeHandle,
  useEffect,
} from "react";
import { cn, debounce } from "@/lib/utils";
import { Typography } from "../typography";

interface TextareaDeboundProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  handleOnChange?: (value: string) => void;
  handleOnSubmit?: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  debounceTime?: number;
  className?: string;
  isLoading?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaDeboundProps>(
  (
    {
      handleOnChange,
      onKeyDown,
      className,
      isLoading,
      debounceTime = 0,
      ...props
    },
    ref
  ) => {
    const [message, setMessage] = useState<string>(
      props.value?.toString() || ""
    );
    const internalRef = useRef<HTMLTextAreaElement>(null);

    // Expose internalRef to parent via forwarded ref
    useImperativeHandle(ref, () => internalRef.current as HTMLTextAreaElement);

    const debouncedSendRequest = useMemo(() => {
      return debounce((value: string) => handleOnChange?.(value), debounceTime);
    }, [handleOnChange, debounceTime]);

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setMessage(value);
      debouncedSendRequest(value);
    };

    const calculateRows = (text: string) => {
      if (!internalRef.current) return 1;

      const el = internalRef.current;
      const computedStyle = window.getComputedStyle(el);
      const charWidth =
        el.clientWidth -
        parseInt(computedStyle.paddingLeft) -
        parseInt(computedStyle.paddingRight);
      const fontSize = parseInt(computedStyle.fontSize);
      const charsPerLine = Math.floor(charWidth / (fontSize * 0.6));

      const lines = text
        .split("\n")
        .map((line) => Math.max(1, Math.ceil(line.length / charsPerLine)))
        .reduce((a, b) => a + b, 0);

      return Math.min(5, Math.max(1, lines));
    };

    useEffect(() => {
      if (isLoading) {
        setMessage("");
      }
    }, [isLoading]);
    useEffect(() => {
      if (props.value !== undefined) {
        setMessage(props.value.toString());
      }
    }, [props.value]);

    return (
      <div className="relative">
        <textarea
          ref={internalRef}
          value={message}
          onChange={onChange}
          onKeyDown={onKeyDown}
          rows={calculateRows(message)}
          className={cn(
            "w-full p-3 grow bg-primary border border-stroke-primary resize-none text-sm/[142.857%] [caret-color:var(--color-icon-red-active)] focus:outline-none",
            className
          )}
          placeholder={props.placeholder || "Type your message..."}
          maxLength={props.maxLength}
          disabled={isLoading}
        />

        {props.maxLength && (
          <Typography
            level="body-14"
            className={cn(
              "absolute right-6 bottom-3 text-txt-secondary text-xs bg-primary",
              {
                "text-txt-class-red font-semibold":
                  message.length > props.maxLength,
              }
            )}
          >
            {message.length}/{props.maxLength}
          </Typography>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
